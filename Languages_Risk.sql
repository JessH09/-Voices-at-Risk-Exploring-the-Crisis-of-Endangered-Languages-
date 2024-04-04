-- Create the table
CREATE TABLE endangered_languages (
    name_in_english TEXT,
    countries TEXT,
    iso639_3_codes TEXT,
    degree_of_endangerment TEXT,
    number_of_speakers NUMERIC,
    latitude NUMERIC,
    longitude NUMERIC
);

-- Check if data is imported successfully
SELECT * FROM endangered_languages;

